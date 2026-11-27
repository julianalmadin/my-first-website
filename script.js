

const button = document.getElementById("hours-button");
  const message = document.getElementById("hours-message");

  button.addEventListener("click", function () {
  if (message.textContent === "") {
    message.textContent = "Monday to Saturday, 8 AM to 6 PM.";
    button.textContent = "Hide shop hours";
  } else {
    message.textContent = "";
    button.textContent = "Show shop hours";
  }
});

const inquiryForm = document.getElementById("inquiry-form");
const inquiryMessage = document.getElementById("inquiry-message");

inquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedName = document.getElementById("inquiry-service").value;
  const selectedService = services.find(function (service) {
    return service.name === selectedName;
  });

    inquiryMessage.textContent =
    `Practice inquiry for ${selectedService.name}. Estimated price: ${formatPrice(selectedService.price)}.`;

  inquiryForm.reset();
  pricePreview.textContent = "";
});
function formatPrice(price) {
  return `₱${price.toLocaleString("en-PH")}`;
}
const services = [
  { name: "Oil Change", price: 1500 },
  { name: "Brake Inspection", price: 500 },
  { name: "Tire Rotation", price: 600 }
];

const serviceDropdown = document.getElementById("inquiry-service");

for (const service of services) {
  const label = `${service.name} (${formatPrice(service.price)})`;
  const option = new Option(label, service.name);
  serviceDropdown.add(option);
}

const pricePreview = document.getElementById("price-preview");

serviceDropdown.addEventListener("change", function () {
  const selectedService = services.find(function (service) {
    return service.name === serviceDropdown.value;
  });

  if (selectedService) {
    pricePreview.textContent = `Estimated price: ${formatPrice(selectedService.price)}`;
  } else {
    pricePreview.textContent = "";
  }
});