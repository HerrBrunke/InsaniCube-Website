<script>
	var menuOpen = false;
	function tryMenu(){
		
		if(!menuOpen){
			openSlideMenu();
		}
		else{
			closeSlideMenu();
		}
	}
	function openSlideMenu(){
		document.getElementById('menu').style.width = '250px';
		document.getElementById('content').style.marginLeft = '250px';
		menuOpen = true;
	}
	function closeSlideMenu(){
		document.getElementById('menu').style.width = '0px';
		document.getElementById('content').style.marginLeft = '0px';
		menuOpen = false;
	}
</script>