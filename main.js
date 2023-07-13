    var dog_count = 0;
    var cat_count = 0;
    var sheep_count = 0;
    var cow_count = 0;
    
    function startClassification()
    {
        navigator.mediaDevices.getUserMedia({ audio:true});
        classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/DIlYiObDM/model.json", modelReady);
    }    

    function modelReady()
    {
        classifier.classify(gotResults);
    }

    function gotResults(error, results)
    {
        console.log("got results");

        if(error){
            console.log(error);
        }
        else{
            console.log(results);

            random_number_r = Math.floor(Math.random()* 255) + 1;
            random_number_g = Math.floor(Math.random()* 255) + 1;
            random_number_b = Math.floor(Math.random()* 255) + 1;

            document.getElementById("dog_count").innerHTML = dog_count;
            document.getElementById("cat_count").innerHTML = cat_count;
            document.getElementById("sheep_count").innerHTML = sheep_count;
            document.getElementById("cow_count").innerHTML = cow_count;

            document.getElementById("class_name").innerHTML = results[0].label;
            document.getElementById("class_name").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

            img = document.getElementById("animal_img");

            if(results[0].label == "Barking")
            {
                img.src = "dog.webp";
                dog_count = dog_count + 1;
            }
            else if(results[0].label == "Meowing")
            {
                img.src = "cat.jpg";
                cat_count = cat_count + 1;
            }
            else if(results[0].label == "Mooing")
            {
                img.src = "Cow.jpg";
                cow_count = cow_count + 1;
            }
            else if(results[0].label == "Baaing")
            {
                img.src = "sheep.jpg";
                sheep_count = sheep_count + 1;
            }
            else
            {
                img.src = "background_noise.jpg";
            }
        }
    }