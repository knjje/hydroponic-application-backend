const express = require("express");
const { admin, ref, rdb } = require("./firebase");
const cors = require("cors");
const app = express();
const axios = require("axios");
const FormData = require("form-data");

app.use(express.json(), cors());

app.post("/updateCron", async (req, res) => {
  const { sft, swt, ft, mb, phU, phD } = req.body;
  const arrayFt = ft.split(":");
  const axios = require("axios");
  let data = JSON.stringify({
    job: {
      enabled: true,
      schedule: {
        timezone: "Asia/Bangkok",
        hours: [arrayFt[0]],
        minutes: [arrayFt[1]],
      },
    },
  });
  let config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: "https://api.cron-job.org/jobs/5018142",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
    },
    data: data,
  };
  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/changeFt", async (req, res) => {
  try {
    let fertilizer = rdb.ref("relaystate/fertilizers");
    fertilizer.set(true);
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changeMb", async (req, res) => {
  try {
    let microbial = rdb.ref("relaystate/microbial");
    microbial.set(true);
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changePhU", async (req, res) => {
  try {
    let pumpphUP = rdb.ref("relaystate/pumpphUP");
    pumpphUP.set(true);
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changePhD", async (req, res) => {
  try {
    let pumpphDown = rdb.ref("relaystate/pumpphDown");
    pumpphDown.set(true);
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changeSprinkerFer", async (req, res) => {
  try {
    let sprinkerFer = rdb.ref("relaystate/sprinklerfertilizers");
    sprinkerFer.set(true);
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changeSprinkerWater", async (req, res) => {
  try {
    let sprinkerWater = rdb.ref("relaystate/sprinklerwater");
    sprinkerWater.set(true);
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

// app.post("/updateByTime", async (req, res) => {
//   const { sft, swt, ft, mb, phU, phD } = req.body;
//   try {
//     const currentMilliseconds = new Date().getTime();
//     if (sft != null || sft != "") {
//       const setSft = new Date();
//       const arraySft = sft.split(":");
//       setSft.setHours(parseInt(arraySft[0]));
//       setSft.setMinutes(parseInt(arraySft[1]));
//       difSft = setSft.getTime() - currentMilliseconds;
//       let sprinkersRef = rdb.ref("relaystate/sprinklerfertilizers");

//       if (difSft > 0) {
//         const countdownInterval = setInterval(() => {
//           difSft -= 1000;
//           if (difSft <= 0) {
//             clearInterval(countdownInterval);
//             sprinkersRef.once("value", (e) => {
//               const sprinkersValue = e.val();
//               if (sprinkersValue === true) {
//                 sprinkersRef.set(false);
//               } else {
//                 sprinkersRef.set(true);
//               }
//             });
//             console.log("success");
//           } else {
//             console.log(difSft);
//           }
//         }, 1000);
//       }
//     }

//     if (swt != null || swt != "") {
//       const setSwt = new Date();
//       const arraySwt = swt.split(":");
//       setSwt.setHours(parseInt(arraySwt[0]));
//       setSwt.setMinutes(parseInt(arraySwt[1]));
//       difSwt = setSwt.getTime() - currentMilliseconds;
//       let fWater = rdb.ref("relaystate/sprinklerwater");

//       if (difSwt > 0) {
//         const countdownInterval = setInterval(() => {
//           difSwt -= 1000;
//           if (difSwt <= 0) {
//             clearInterval(countdownInterval);
//             fWater.once("value", (e) => {
//               const sprinkersValue = e.val();
//               if (sprinkersValue === true) {
//                 fWater.set(false);
//               } else {
//                 fWater.set(true);
//               }
//             });
//             console.log("success");
//           } else {
//             console.log(difSwt);
//           }
//         }, 1000);
//       }
//     }

//     if (ft != null || ft != "") {
//       const setFt = new Date();
//       const arrayFt = ft.split(":");
//       setFt.setHours(parseInt(arrayFt[0]));
//       setFt.setMinutes(parseInt(arrayFt[1]));
//       difFt = setFt.getTime() - currentMilliseconds;

//       let sprinkersFT = rdb.ref("relaystate/fertilizers");

//       if (difFt > 0) {
//         const countdownInterval = setInterval(() => {
//           difFt -= 1000;
//           if (difFt <= 0) {
//             clearInterval(countdownInterval);
//             sprinkersFT.once("value", (e) => {
//               const sprinkersValue = e.val();
//               if (sprinkersValue === true) {
//                 sprinkersFT.set(false);
//               } else {
//                 sprinkersFT.set(true);
//               }
//             });
//             console.log("success");
//           } else {
//             console.log(difFt);
//           }
//         }, 1000);
//       }
//     }

//     if (mb != null || mb != "") {
//       const setMb = new Date();
//       const arrayMb = mb.split(":");
//       setMb.setHours(parseInt(arrayMb[0]));
//       setMb.setMinutes(parseInt(arrayMb[1]));
//       difMb = setMb.getTime() - currentMilliseconds;
//       let sprinkersMB = rdb.ref("relaystate/microbial");

//       if (difMb > 0) {
//         const countdownInterval = setInterval(() => {
//           difMb -= 1000;
//           if (difMb <= 0) {
//             clearInterval(countdownInterval);
//             sprinkersMB.once("value", (e) => {
//               const sprinkersValue = e.val();
//               if (sprinkersValue === true) {
//                 sprinkersMB.set(false);
//               } else {
//                 sprinkersMB.set(true);
//               }
//             });
//             console.log("success");
//           } else {
//             console.log(difMb);
//           }
//         }, 1000);
//       }
//     }

//     if (phU != null || phU != "") {
//       const setPhU = new Date();
//       const arrayPhU = phU.split(":");
//       setPhU.setHours(parseInt(arrayPhU[0]));
//       setPhU.setMinutes(parseInt(arrayPhU[1]));
//       difPhU = setPhU.getTime() - currentMilliseconds;
//       let sprinkersPHU = rdb.ref("relaystate/pumpphUP");

//       if (difPhU > 0) {
//         const countdownInterval = setInterval(() => {
//           difPhU -= 1000;
//           if (difPhU <= 0) {
//             clearInterval(countdownInterval);
//             sprinkersPHU.once("value", (e) => {
//               const sprinkersValue = e.val();
//               if (sprinkersValue === true) {
//                 sprinkersPHU.set(false);
//               } else {
//                 sprinkersPHU.set(true);
//               }
//             });
//             console.log("success");
//           } else {
//             console.log(difPhU);
//           }
//         }, 1000);
//       }
//     }

//     if (phD != null || phD != "") {
//       const setPhD = new Date();
//       const arrayPhD = phD.split(":");
//       setPhD.setHours(parseInt(arrayPhD[0]));
//       setPhD.setMinutes(parseInt(arrayPhD[1]));
//       difPhD = setPhD.getTime() - currentMilliseconds;
//       let sprinkersPHD = rdb.ref("relaystate/pumpphDown");

//       if (difPhD > 0) {
//         const countdownInterval = setInterval(() => {
//           difPhD -= 1000;
//           if (difPhD <= 0) {
//             clearInterval(countdownInterval);
//             sprinkersPHD.once("value", (e) => {
//               const sprinkersValue = e.val();
//               if (sprinkersValue === true) {
//                 sprinkersPHD.set(false);
//               } else {
//                 sprinkersPHD.set(true);
//               }
//             });
//             console.log("success");
//           } else {
//             console.log(difPhD);
//           }
//         }, 1000);
//       }
//     }

//     return res.status(200).json({ message: "อัปเดตสำเร็จ" });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ error: "เกิดข้อผิดพลาดในการตรวจสอบคิวนักเรียน" });
//   }
// });

app.get("/noti", async (req, res) => {
  let data = new FormData();
  let Temperature = rdb.ref("Temperature");
  let TemperatureValue = "";
  Temperature.once("value", (e) => {
    TemperatureValue = e.val();
  });
  data.append("message", TemperatureValue + "เกินนะ");
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://notify-api.line.me/api/notify",
    headers: {
      Authorization: "Bearer iU2H524KfuGVWmHTXZHYTsg1haf6QUZc9OfHoW8H7qZ",
      ...data.getHeaders(),
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/test", (req, res) => {
  res.status(200).send("Test successful!"); // ส่งข้อความ 'Test successful!' กลับไป
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
