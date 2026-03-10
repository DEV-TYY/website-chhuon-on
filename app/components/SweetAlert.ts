export function SweetAlert() {
  const showAlert = (type: 'success' | 'error', title: string, goto: string | null = null) => {
    if (process.client) {
      const existAlert = document.querySelector(".sweet-alert-modal");
      if (existAlert) existAlert.remove();

      const element = document.createElement("div");
      element.classList.add("sweet-alert-modal");

      if (type === "success") {
        element.classList.add("bg-green-700");
        element.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
          </svg>
          <p class="text-white text-sm py-2">${title}</p>
        `;
      } else if (type === "error") {
        element.classList.add("bg-red-600");
        element.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <p class="text-white text-sm py-2">${title}</p>
        `;
      }

      document.body.appendChild(element);

      // Auto-remove after 3 seconds
      setTimeout(() => element.remove(), 3000);

      // Navigate if goto is provided
      if (goto) {
        setTimeout(() => {
          window.location.href = goto;
        }, 1000);
      }
    }
  }

  return { showAlert };
}