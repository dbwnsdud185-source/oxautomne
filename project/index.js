document.querySelectorAll('input[name="menu"]').forEach(radio => {
    radio.addEventListener("change", () => {
        const action = radio.value;

        if (action === "start") {
            window.location.href = "start.html";  
        } 
        else if (action === "load") {
            alert("불러오기!");
        }
        else if (action === "option") {
            alert("옵션!");
        }
    });
});
