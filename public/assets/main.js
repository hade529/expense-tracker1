// Client-side validation for the Add Expense form.
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('expense-form');
    if (!form) return;

    function clearError(input) {
        input.classList.remove('is-invalid');
        var next = input.nextElementSibling;
        if (next && next.classList.contains('invalid-feedback')) next.remove();
    }

    function showError(input, message) {
        clearError(input);
        input.classList.add('is-invalid');
        var div = document.createElement('div');
        div.className = 'invalid-feedback';
        div.textContent = message;
        input.insertAdjacentElement('afterend', div);
    }

    form.addEventListener('submit', function (e) {
        var description = form.elements['description'];
        var amount = form.elements['amount'];
        var category = form.elements['category_id'];
        var date = form.elements['expense_date'];
        var valid = true;

        [description, amount, category, date].forEach(clearError);

        if (description.value.trim() === '') {
            showError(description, 'Description is required.');
            valid = false;
        }

        var value = amount.value.trim();
        if (value === '') {
            showError(amount, 'Amount is required.');
            valid = false;
        } else if (isNaN(value) || parseFloat(value) <= 0) {
            showError(amount, 'Amount must be greater than zero.');
            valid = false;
        }

        if (category.value === '') {
            showError(category, 'Please select a category.');
            valid = false;
        }

        if (!/^\d{4}-\d{2}-\d{2}$/.test(date.value.trim())) {
            showError(date, 'Use the format yyyy-mm-dd.');
            valid = false;
        }

        if (!valid) e.preventDefault();
    });
});
