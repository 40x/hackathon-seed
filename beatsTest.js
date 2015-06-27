//var bam = new BeatsAudioManager();
//bam.on("ready", handleReady);
//bam.on("error", handleError);
//
//function handleReady(value) {
//    //show console
//    bam_engine.style.width = "500px";
//    bam_engine.style.height = "300px";
//    // set credentials
//    bam.clientId = ['pqqpeejv5hfstfxmub7xz4uv'];
//    bam.authentication = {
//        access_token: ['bhvgay25y6yf9rxz4zuun9a4'],
//        user_id: ['divyanshu1990']
//    };
//    bam.identifier = ['tr82071543'];
//    // play some music!
//    bam.load();
//}
//
//function handleError(value) {
//    console.log("Error: " + value);
//    switch (value) {
//        case "auth":
//            // Beats Music API auth error (401)
//            break;
//        case "connectionfailure":
//            // audio stream connection failure
//            break;
//        case "apisecurity":
//            // Beats Music API crossdomain error
//            break;
//        case "streamsecurity":
//            // audio stream crossdomain error
//            break;
//        case "streamio":
//            // audio stream io error
//            break;
//        case "apiio":
//            // Beats Music API io error getting track data
//            break;
//        case "flashversion":
//            // flash version too low or not installed (10.2)
//            break;
//    }
//}