const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target.querySelector(".stats-number");
        const bar = entry.target.querySelector(".stats-bar");

        const target = Number(counter.dataset.target);

        let current = 0;
        const increment = target / 100;

        function updateCounter(){

            current += increment;

            if(current < target){
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            }else{
                counter.textContent = target;
            }
        }

        bar.classList.add("active");
        updateCounter();

        observer.unobserve(entry.target);

    });

},{
    threshold:0.5
});

document.querySelectorAll(".stats-item").forEach(item=>{
    observer.observe(item);
});