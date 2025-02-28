const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const router = express.Router();
const memberFilePath = path.join(__dirname, "../data/member.json");


router.get("/", async (req, res) => {
    try{
        const memberData = await fs.readFile(memberFilePath, "utf8");
        res.json(JSON.parse(memberData));
    }
    catch (err) {
        res.status(500).json({ error : "에러남"});
    }
});

// router.get("/", async (req, res) => {
//     try{
//         const memberData = await fs.readFile(memberFilePath, "utf8");
//         res.json(JSON.parse(memberData));
//     }
//     catch (err) {
//         res.status(500).json({ error : "에러남"});
//     }
// });

module.exports = router;


{/** 가독성용 (대민이꺼) */}
 
    
{/** gpt code 

router.get("/", (req, res) => {
    fs.readFile( memberFilePath, "utf8", 
            ( err, data ) => {
                if( err ) {
                    return res.status(500).json({error : "못불러"});
                }
                res.json(JSON.parse(data));
            }
        );
    }
);
*/}