// China Camera Style - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('China Camera Style website loaded');
    
    // Camera data array with detailed specifications
    const featuredCameras = [
      {
        name: "Minolta X-700",
        description: "Classic 35mm SLR with MD Rokkor-X 50mm f/1.2 lens",
        specs: "Released in 1981 as Minolta's top-of-the-line manual focus SLR. Features aperture priority and program modes alongside manual exposure.",
        imageUrl: "assets/images/gallery/Minolta X-700.jpg"
      },
      {
        name: "Mamiya 645 Pro",
        description: "Medium format SLR with 6x4.5cm frames on 120 film",
        specs: "Professional medium format camera system with interchangeable backs, finders, and lenses. Known for exceptional image quality and versatility.",
        imageUrl: "assets/images/gallery/Mamiya 645 Pro.jpg"
      },
      {
        name: "Zeiss Ikon",
        description: "Premium compact rangefinder with Zeiss optics",
        specs: "High-quality rangefinder camera featuring the legendary Zeiss lens quality. A favorite for street photography with its discrete size and excellent optics.",
        imageUrl: "assets/images/gallery/Zeiss Ikon.jpg"
      },
      {
        name: "Ricoh",
        description: "Compact film camera with Color Rikenon f/2.8 35mm lens",
        specs: "Portable and reliable compact camera that delivers sharp images with its Color Rikenon lens. Perfect for everyday photography.",
        imageUrl: "assets/images/gallery/Ricoh.jpg"
      },
      {
        name: "Konica Recorder",
        description: "Stylish champagne-colored compact automatic camera",
        specs: "Distinguished by its unique metallic finish, this auto-focus point-and-shoot brings style and functionality in a pocket-sized package.",
        imageUrl: "assets/images/gallery/Konica Recorder.jpg"
      },
      {
        name: "Nikon FA Gold",
        description: "Limited edition gold 35mm SLR with Nikkor 50mm lens",
        specs: "Special edition of Nikon's advanced FA model featuring a distinctive gold finish. Known for its innovative Matrix metering system.",
        imageUrl: "assets/images/gallery/Nikon FA Gold.jpg"
      }
    ];
    
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Function to show detailed camera information
    function showCameraDetails(camera) {
      // Create modal with camera details
      const modal = document.createElement('div');
      modal.className = 'camera-modal';
      
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <img src="${camera.imageUrl}" alt="${camera.name}" style="max-width: 100%; border-radius: 5px; margin-bottom: 1rem;">
          <h2>${camera.name}</h2>
          <p class="camera-description">${camera.description}</p>
          <p class="camera-specs">${camera.specs}</p>
          <a href="https://www.instagram.com/chinacamerastyle/" class="instagram-link" target="_blank">
            See more on our Instagram
          </a>
        </div>
      `;
      
      // Add close functionality
      modal.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(modal);
      });
      
      // Add backdrop click to close (for better UX)
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          document.body.removeChild(modal);
        }
      });
      
      // Add swipe down to close for mobile
      if (isMobile) {
        let touchStartY = 0;
        let touchEndY = 0;
        
        modal.addEventListener('touchstart', (e) => {
          touchStartY = e.changedTouches[0].screenY;
        }, false);
        
        modal.addEventListener('touchend', (e) => {
          touchEndY = e.changedTouches[0].screenY;
          handleSwipe();
        }, false);
        
        function handleSwipe() {
          // If swiped down more than 100px, close the modal
          if (touchEndY - touchStartY > 100) {
            document.body.removeChild(modal);
          }
        }
      }
      
      // Add escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.contains(modal)) {
          document.body.removeChild(modal);
        }
      });
      
      // Add modal to the page
      document.body.appendChild(modal);
    }

    // Add click/touch events to gallery items for detailed view
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      if (index < featuredCameras.length) {
        item.addEventListener('click', () => {
          showCameraDetails(featuredCameras[index]);
        });
        
        // Add touch feedback for mobile
        if (isMobile) {
          item.addEventListener('touchstart', () => {
            item.style.opacity = '0.8';
          });
          
          item.addEventListener('touchend', () => {
            item.style.opacity = '1';
          });
        }
      }
    });
    
    // Improve mobile menu navigation by making sure taps register properly
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      if (isMobile) {
        link.style.padding = '12px 20px'; // Larger tap target for mobile
      }
    });
});