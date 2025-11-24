export default async function main() {
    console.log("start App")


    const main_menu = document.querySelector("#main-menu")
    // const newGame = document.querySelector
    const creditScreen = document.querySelector("#credit-screen")
    const currentScreen = "mainMenu"

    let currentIndex = 0;
    const menuItems = document.querySelectorAll(".menu-item");

    console.log(menuItems.length);
    const menuitem_count = menuItems.length;

    menuItems[currentIndex].classList.add("select");

    window.addEventListener("keydown", (e) => {
       menuItems[currentIndex].classList.remove("select")
         
       
       if(currentScreen == "mainMenu") {
       }
       if(e.key == "enter") {
        creditScreen.classList.add("hide");
        mainMenu.classList.remove("hide");
        currentScreen = "mainMenu";
       }
        else if(currentScreen == "creditScreen") ｛
       
       if(e.key == "ArrowUp") {
            currentIndex--

            if(currentIndex < 0) {
                currentIndex=menuitem_count - 1;
       }
    }
       else if(e.key == "ArrowDown") {
            currentIndex++
            currentIndex %= menuitem_count
    }
    else if(e.key == "Enter") {
        console.log(menuItems[currentIndex].dataset.action)
        const select_action = menuItems[currentIndex].dataset.action; 
        
        if(select_action == 'credit') {
            main_menu.classList.add("hide");
            creditScreen.classList.remove("hide");
            currentScreen = "creditScreen";
        }        
    } 
        console.log(currentIndex);
        menuItems[currentIndex].classList.add("select");
          
    }
  )
    }
)

