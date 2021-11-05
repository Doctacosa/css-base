
class IODisplayMode {
	static isDark = false;
	static lightCSS;
	static darkCSS;


	static init() {
		//React on system change
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener(
			'change',
			e => e.matches && this.setDarkMode(true)
		);
		window.matchMedia('(prefers-color-scheme: light)').addEventListener(
			'change',
			e => e.matches && this.setDarkMode(false)
		);

		//Find CSS files
		this.lightCSS = document.querySelectorAll(`link[rel=stylesheet][media*=prefers-color-scheme][media*="light"]`);
		this.darkCSS = document.querySelectorAll(`link[rel=stylesheet][media*=prefers-color-scheme][media*="dark"]`);

		//Prepare the toggle option
		document.body.insertAdjacentHTML(
			'beforeend',
			'<div style="display: inline-block; border: 1px solid gray; border-radius: 3px;" >' + 
			'	<label><input type="checkbox" id="io_dark_mode" onclick="IODisplayMode.toggleDarkMode()" /> Dark mode</label>' + 
			'</div>',
		);

		//Get the initial status - no refresh necessary
		let isDarkDefault = window.matchMedia('(prefers-color-scheme: dark)');
		if (isDarkDefault.matches) {
			this.isDark = true;
			document.getElementById('io_dark_mode').checked = true;
		}
	}


	//Toggle the current status of the dark mode
	static toggleDarkMode() {
		this.isDark = !this.isDark;
		this.refreshDarkMode();
	}

	//Enable or disable the dark mode
	static setDarkMode(mode) {
		this.isDark = mode;
		this.refreshDarkMode();
	}

	//Call to force a visual and UI update
	static refreshDarkMode() {
		if (this.isDark) {
			this.lightCSS.forEach((file) => {
				file.media = 'not all';
				file.disabled = true;
			});
			this.darkCSS.forEach((file) => {
				file.media = 'all';
				file.disabled = false;
			});
		} else {
			this.lightCSS.forEach((file) => {
				file.media = 'all';
				file.disabled = false;
			});
			this.darkCSS.forEach((file) => {
				file.media = 'not all';
				file.disabled = true;
			});
		}
		document.getElementById('io_dark_mode').checked = this.isDark;
	}


	//Fallback if `prefers-color-scheme` is not supported
	static defaultIfNoColorScheme() {
		if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
			document.documentElement.style.display = 'none';
			document.head.insertAdjacentHTML(
				'beforeend',
				'<link rel="stylesheet" href="base-light.css" onload="document.documentElement.style.display = \'\'">',
			);
		}
	}
}


document.addEventListener("DOMContentLoaded", function() {
	IODisplayMode.init();
});
