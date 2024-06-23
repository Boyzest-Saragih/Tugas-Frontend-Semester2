document.addEventListener('DOMContentLoaded', function() {
    const orderStartInput = document.getElementById('order-start');
    const orderEndInput = document.getElementById('order-end');
    const totalElement = document.getElementById('total-price');
    const price = 100

    const inputs = [orderStartInput, orderEndInput];

    inputs.forEach(input => {
        input.addEventListener('change', function() {
            const inputValue = input.value;
            const isValidDate = isValidDateInput(inputValue);

            if (!isValidDate) {
                console.log('Format tanggal tidak valid');
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
                calculateDateDifference();
            }
        });
    });

    function isValidDateInput(dateString) {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(dateString);
    }

    function calculateDateDifference() {
        const startDateString = orderStartInput.value;
        const endDateString = orderEndInput.value;

        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        const differenceMs = endDate - startDate;
        const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

        const totalPrice = differenceDays * price;
        console.log('Selisih hari:', differenceDays);

        totalElement.textContent = `Total Price ($100 * ${differenceDays}) : $${totalPrice}`;
    }
});
