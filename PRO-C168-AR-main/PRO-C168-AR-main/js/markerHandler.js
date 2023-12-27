AFRAME.registerComponent("markerHandler",{
    init:function(){
        this.el.addEventListener("markerFound",()=> {
            this.handleMarkerFound()
            
        })
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost()
        })

    },

    handleMarkerFound:function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "flex"
        var orderButton = document.getElementById("orderButton")
        var orderSummaryButton = document.getElementById("order-summaryButton")
        orderButton.addEventListener("click",()=> {
            swal({
                title:"Thanks for ordering",
                timer:2000,
            })
        
        })

        orderSummaryButton.addEventListener("click",()=>{
            swal({
                title:"Your Summary is ",
                timer:2000,
            })
        })
     
    },
    handleMarkerLost:function(){
    var buttondiv = document.getElementById("button-div")
    buttondiv.style.display = "none"
    },

    

})