console.log("Rest operator")

function fruits(a,b,...c){
    console.log("fruits",a,b,c)
}
fruits('apple','banana','kiwi','orange','papaya');

// sign{...} rest operator or ye last me lagta h