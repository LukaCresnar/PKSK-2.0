const select = document.getElementById('stenaLeto');
const iframe = document.getElementById('360stena');

// Add event listener for change event on select
select.addEventListener('change', function() {
    const selectedOption = select.options[select.selectedIndex].value;
    
    iframe.src = selectedOption;
});