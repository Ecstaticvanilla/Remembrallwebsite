// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.nav-list .nav-item');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             navLinks.forEach(l => l.classList.remove('selected'));
//             this.classList.add('selected');
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list .nav-item');

    function updateSelected() {
        const hash = location.hash || '#intro'; 
        navLinks.forEach(link => {
            link.classList.toggle(
                'selected',
                link.getAttribute('href') === hash
            );
        });
    }
    updateSelected();

    window.addEventListener('hashchange', updateSelected);
    
    // function openSubItems(){
    //     let subnavitemblock = document.getElementById("subblock");
    //     if (subnavitemblock.style.display === "none")

    //         subnavitemblock.style.display = "block";
    //     else
    //         subnavitemblock.style.display = "none";
    //     console.log(subnavitemblock.style.display);
    // }   
});


