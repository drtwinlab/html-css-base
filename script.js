let zname = "Admin";


if (zname === "Admin") {
  let pass = "TheMaster";
            if (pass === "TheMaster") {
                console.log("Welcome")
            } else if (pass === "" || pass === null){console.log("Canceled")}
            else {console.log("Wrong password")}

} else if (zname === "" || zname === null) {
    console.log("Cancelled")
} else {console.log("Idk")}
