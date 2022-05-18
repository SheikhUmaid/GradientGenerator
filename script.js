let btn = document.getElementById("btn");
        let color1 = document.getElementById("color1");
        let color2 = document.getElementById("color2");
        btn.addEventListener("click",()=>{
            // alert(color1.value)
            // alert(color2.value)
            document.body.style.background = (`linear-gradient(to right,${color1.value},${color2.value})`);
        })