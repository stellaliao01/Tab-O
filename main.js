//see all open tabs in a vertical form  --- done 

//add a delete button for each tab

//have the functionality to go to the tab when you click on it on the extention tab
//have the functionality to close each tab when delete button is clicked

//chrome.tabs online 
//disply all the divs 
document.addEventListener("DOMContentLoaded", () => {
    // alert("DOM ready!");
    let tabz = []
    chrome.windows.getAll({ populate: true }, function (windows) {
        windows.forEach(function (window) {
            window.tabs.forEach(function (tab) {
                //collect all of the urls here, I will just log them instead
                // console.log(tab.url);
                tabz.push(tab.url)
            });
        });
        let tabDiv = document.querySelector('#tabs')
        for (el of tabz) {
            el = el.slice(0, 37)
            // console.log(el)
            tabDiv.innerHTML += `${el}\n`
        }
    });
});



