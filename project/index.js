export default async function main() {
    console.log("hello")

    
}
document.querySelectorAll('input[name="menu"]').forEach(radio => {
    radio.addEventListener("change", () => {
        const action = radio.value;

        if (action === "start") {
            alert("게임 시작!");
        } 
        else if (action === "load") {
            alert("불러오기!");
        }
        else if (action === "option") {
            alert("옵션!");
        }
    });
});

