document.addEventListener("click", function(e) {          
				let body = document.querySelector("body");            
				let getGambar = document.createElement("span");           
				let x = e.offsetX;         
				let y = e.offsetY;   
				let size = Math.random() * 100;      
				
				getGambar.style.left = `${x}px`;       
				getGambar.style.top = `${y}px`;                  
				getGambar.style.width = `${20 + size}px`;      
				getGambar.style.height = `${20 + size}px`;      
				body.appendChild(getGambar);         
				
				setTimeout(() => {      
								getGambar.remove();        
				},2000);
         
});