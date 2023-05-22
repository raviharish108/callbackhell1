let timer=10;
let time = document.getElementById('timer');
let display=document.getElementById('display1');
time.style.margin= "auto";
time.style.textAlign = "center";
time.style.maxWidth ="200px"
setTimeout(() => {
    time.innerText = timer--;
    display.style.backgroundColor="red";
    setTimeout(() => {
        time.innerText = timer--;
        display.style.backgroundColor="white";
        setTimeout(() => {
            time.innerText = timer--;
            display.style.backgroundColor="blue";
            setTimeout(() => {
                time.innerText =timer--;
                display.style.backgroundColor="brown";
                setTimeout(() => {
                    time.innerText = timer--;
                    display.style.backgroundColor="black";
                    setTimeout(() => {
                        time.innerText = timer--;
                        display.style.backgroundColor="gray";
                        setTimeout(() => {
                            time.innerText = timer--;
                            display.style.backgroundColor="yellow";
                            setTimeout(() => {
                                time.innerText =timer--;
                                display.style.backgroundColor="blue";
                                setTimeout(() => {
                                    time.innerText =timer--;
                                    display.style.backgroundColor="violet";
                                    setTimeout(() => {
                                        time.innerText = "happy independence day!!";
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);