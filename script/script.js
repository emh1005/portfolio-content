window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	

	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

    var checkham = true;
    document.getElementById("hams").onclick = function() {
    	if (checkham) {
    		document.getElementById("hammenu").style.width = "100vw";
    		checkham = false;
    	} else {
    		document.getElementById("hammenu").style.width = "0";
    		checkham = true;
    	}
    }

    document.querySelectorAll('.hamli').forEach((li) => {
    	li.onclick = function() {
    	if (!checkham) {
    		document.getElementById("hammenu").style.width = "0";
    		document.getElementById("hams").classList.remove("is-active");
    		checkham = true;
    	}
    }
});
    

});

