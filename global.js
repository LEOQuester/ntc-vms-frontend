function fetchAndLoadContent(url, targetId) {
  const element = document.getElementById(targetId);
  if (!element) {
      console.warn(`Element with id '${targetId}' not found.`);
      return;
  }

  fetch(url)
      .then((res) => {
          if (!res.ok) {
              throw new Error(`Failed to fetch '${url}'. Status: ${res.status}`);
          }
          return res.text();
      })
      .then((data) => {
          element.innerHTML = data;
      })
      .catch((error) => {
          console.error(`Error fetching or loading content for '${targetId}':`, error);
      });
}

// Example usage:
fetchAndLoadContent("nav.html", "nav");
fetchAndLoadContent("footer.html", "footer");
fetchAndLoadContent("dash.html", "dash");

function dash_toggle(){
  console.log("clicker")
  document.querySelector('.sidebar').classList.toggle('collapsed');
}
function dash_exp(){
  console.log("clicker")
  document.querySelector('.sidebar').classList.remove('collapsed');
}
function dash_con(){
  console.log("clicker")
  document.querySelector('.sidebar').classList.add('collapsed');
}

setTimeout(dash_con, 1000);
// global.js

// global.js

function showAlert(message, status = 'info', timeout = 5000) {
  // Determine background color based on status
  let backgroundColor;
  switch (status) {
      case 'success':
          backgroundColor = '#28a745'; // Green for success
          break;
      case 'warning':
          backgroundColor = '#ffc107'; // Orange for warning
          break;
      case 'error':
          backgroundColor = '#dc3545'; // Red for error
          break;
      case 'info':
      default:
          backgroundColor = '#007bff'; // Blue for info (default)
          break;
  }

  // Create elements for the toast notification
  const toast = document.createElement('div');
  const toastMessage = document.createElement('p');
  const closeButton = document.createElement('button');
  const timeoutBar = document.createElement('div');
  const leftBar = document.createElement('div')

  //styling for left bar
  leftBar.style.height= '100%';
  leftBar.style.width = '2%';
  leftBar.style.backgroundColor = backgroundColor;
  leftBar.style.position = 'absolute';
  leftBar.style.bottom = '0';
  leftBar.style.left = '0';
  leftBar.style.borderBottomLeftRadius = '8px';
  leftBar.style.borderBottomRightRadius = '8px';


  // Styling for the toast notification
  toast.classList.add('toast');
  toast.style.backgroundColor = "#FFFFFF";
  toast.style.color = 'black';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  toast.style.position = 'fixed';
  toast.style.bottom = '20px'; // Adjust bottom positioning as needed
  toast.style.right = '20px'; // Adjust right positioning as needed
  toast.style.zIndex = '1000';
  toast.style.width = '300px'; // Adjust width as needed
  toast.style.display = 'flex';
  toast.style.justifyContent = 'space-between';
  toast.style.alignItems = 'center';

  // Styling for the toast message
  toastMessage.textContent = message;
  toastMessage.style.flex = '1';
  toastMessage.style.margin = '0';
  toastMessage.style.fontSize = '12px';

  // Styling for the close button
  closeButton.textContent = 'X';
  closeButton.style.padding = '4px';
  closeButton.style.backgroundColor = 'transparent';
  closeButton.style.color = 'red';
  closeButton.style.border = 'none';
  closeButton.style.cursor = 'pointer';

  // Styling for the timeout bar
  timeoutBar.style.height = '10%';
  timeoutBar.style.width = '100%';
  timeoutBar.style.position = 'absolute';
  timeoutBar.style.bottom = '0';
  timeoutBar.style.left = '0';
  timeoutBar.style.backgroundColor = backgroundColor;
  timeoutBar.style.opacity = '0.5';
  timeoutBar.style.borderBottomLeftRadius = '8px';
  timeoutBar.style.borderBottomRightRadius = '8px';

  // Append elements to the toast
  toast.appendChild(toastMessage);
  toast.appendChild(closeButton);
  toast.appendChild(timeoutBar);
  toast.appendChild(leftBar);

  // Append toast to the body
  document.body.appendChild(toast);

  // Close button functionality
  closeButton.addEventListener('click', function() {
      document.body.removeChild(toast);
  });

  // Timeout functionality with animation
  let startTime = Date.now();
  let animationFrame;
  function animateTimeout() {
      const elapsedTime = Date.now() - startTime;
      const widthPercentage = (1 - (elapsedTime / timeout)) * 100;
      timeoutBar.style.width = `${widthPercentage}%`;
      if (elapsedTime < timeout) {
          animationFrame = requestAnimationFrame(animateTimeout);
      } else {
          cancelAnimationFrame(animationFrame);
          document.body.removeChild(toast);
      }
  }
  animateTimeout();

  // Optional: Stop animation if the toast is closed manually
  toast.addEventListener('mouseenter', function() {
      cancelAnimationFrame(animationFrame);
  });

  toast.addEventListener('mouseleave', function() {
      animateTimeout();
  });
}



/*
// Loader
function showLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "flex";
  document.body.style.overflow = "hidden";
}
//showLoader();
function hideLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
  document.body.style.overflowY = "auto";
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showAndLoad(event, element) {
  event.preventDefault();
  showLoader();
  // await delay(200);
  window.location.href = element.href;
}

async function showAndLoadForm(event, element) {
  event.preventDefault();
  showLoader();
  await delay(1200); // Assuming you have a delay function defined elsewhere
  element.submit();
}*/
