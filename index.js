const express = require("express");
const { admin, ref, rdb } = require("./firebase");
const cors = require("cors");
const app = express();
const axios = require("axios");
const FormData = require("form-data");

app.use(express.json(), cors());

app.post("/updateCron", async (req, res) => {
  try{
  const { ft, mb, phU, phD } = req.body;
  const arrayFt = ft.split(":");
  const axios = require("axios");
  console.log("ft", arrayFt);
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

  const arrayMb = mb.split(":");
  const axiosMb = require("axios");
  let dataMb = JSON.stringify({
    job: {
      enabled: true,
      schedule: {
        timezone: "Asia/Bangkok",
        hours: [arrayMb[0]],
        minutes: [arrayMb[1]],
      },
    },
  });
  console.log("mb", arrayMb);
  let configMb = {
    method: "patch",
    maxBodyLength: Infinity,
    url: "https://api.cron-job.org/jobs/5020673",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
    },
    data: dataMb,
  };
  axiosMb
    .request(configMb)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  const arrayphU = phU.split(":");
  const axiosphU = require("axios");
  let dataphU = JSON.stringify({
    job: {
      enabled: true,
      schedule: {
        timezone: "Asia/Bangkok",
        hours: [arrayphU[0]],
        minutes: [arrayphU[1]],
      },
    },
  });
  console.log("phU", arrayphU);
  let configphU = {
    method: "patch",
    maxBodyLength: Infinity,
    url: "https://api.cron-job.org/jobs/5018210",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
    },
    data: dataphU,
  };
  axiosphU
    .request(configphU)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  const arrayphD = phD.split(":");
  const axiosphD = require("axios");
  let dataphD = JSON.stringify({
    job: {
      enabled: true,
      schedule: {
        timezone: "Asia/Bangkok",
        hours: [arrayphD[0]],
        minutes: [arrayphD[1]],
      },
    },
  });
  console.log("phD", arrayphD);
  let configphD = {
    method: "patch",
    maxBodyLength: Infinity,
    url: "https://api.cron-job.org/jobs/5020675",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
    },
    data: dataphD,
  };
  axiosphD
    .request(configphD)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.post("/updateCronSprinker", async (req, res) => {
  const { swt, sft } = req.body;
  const arrayswt = swt.split(":");
  const axiosswt = require("axios");
  let dataswt = JSON.stringify({
    job: {
      enabled: true,
      schedule: {
        timezone: "Asia/Bangkok",
        hours: [arrayswt[0]],
        minutes: [arrayswt[1]],
      },
    },
  });
  console.log("swt", arrayswt);
  let configswt = {
    method: "patch",
    maxBodyLength: Infinity,
    url: "https://api.cron-job.org/jobs/5020676",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
    },
    data: dataswt,
  };
  axiosswt
    .request(configswt)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });


    const arraysft = sft.split(":");
    const axiossft = require("axios");
    let datasft = JSON.stringify({
      job: {
        enabled: true,
        schedule: {
          timezone: "Asia/Bangkok",
          hours: [arraysft[0]],
          minutes: [arraysft[1]],
        },
      },
    });
    console.log("sft", arraysft);
    let configsft = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "https://api.cron-job.org/jobs/5020677",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
      },
      data: datasft,
    };
    axiossft
      .request(configsft)
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
    let timeFT = rdb.ref("timeFT");
    fertilizer.set(true);
    timeFT.set("");
    let data = new FormData();
    data.append("message", "กำลังเริ่มใส่ปุ๋ย");
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changeMb", async (req, res) => {
  try {
    let microbial = rdb.ref("relaystate/microbial");
    let timeMB = rdb.ref("timeMB");
    timeMB.set("");
    microbial.set(true);
    let data = new FormData();
    data.append("message", "กำลังเริ่มใส่สารอาหาร");
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changePhU", async (req, res) => {
  try {
    let pumpphUP = rdb.ref("relaystate/pumpphUP");
    let timePHU = rdb.ref("timePHU");
    timePHU.set("");
    pumpphUP.set(true);
    let data = new FormData();
    data.append("message", "กำลังเริ่มใส่สารเพิ่มค่า pH");
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changePhD", async (req, res) => {
  try {
    let pumpphDown = rdb.ref("relaystate/pumpphDown");
    let timePHD = rdb.ref("timePHD");
    timePHD.set("");
    pumpphDown.set(true);
    let data = new FormData();
    data.append("message", "กำลังเริ่มใส่สารลดค่า pH");
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changeSprinkerFer", async (req, res) => {
  try {
    let sprinkerFer = rdb.ref("relaystate/sprinklerfertilizers");
    sprinkerFer.set(true);
    let data = new FormData();
    data.append("message", "กำลังเปิดที่พ่นปุ๋ย");
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/changeSprinkerWater", async (req, res) => {
  try {
    let sprinkerWater = rdb.ref("relaystate/sprinklerwater");
    sprinkerWater.set(true);
    let data = new FormData();
    data.append("message", "กำลังเปิดที่พ่นน้ำ");
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.get("/noti", async (req, res) => {
  let datatem = new FormData();
  let temperature = rdb.ref("Temperature");
  temperature.once("value", (e) => {
    const temperatureValue = e.val();
    if (temperatureValue > 30) {
      datatem.append(
        "message",
        "ขณะนี้อุณหภูมิสูงกว่า 30 องศา อุณหภูมิของท่านคือ " +
          temperatureValue +
          " องศา"
      );
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://notify-api.line.me/api/notify",
        headers: {
          Authorization: "Bearer iU2H524KfuGVWmHTXZHYTsg1haf6QUZc9OfHoW8H7qZ",
          ...datatem.getHeaders(),
        },
        data: datatem,
      };
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  let data = new FormData();
  let humidity = rdb.ref("Humidity");
  humidity.once("value", (e) => {
    const humidityValue = e.val();
    if (humidityValue > 80) {
      data.append(
        "message",
        "ขณะนี้ความชื้นสูงกว่า 80% ความชื้นของท่านคือ " + humidityValue + "%"
      );
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
    } else if (humidityValue < 40) {
      data.append(
        "message",
        "ขณะนี้ความชื้นต่ำกว่า 40% ความชื้นของท่านคือ " + humidityValue + "%"
      );
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
    }
  });

  let dataPh = new FormData();
  let ph = rdb.ref("pHValue");
  ph.once("value", (e) => {
    const phValue = e.val();
    if (phValue > 8) {
      dataPh.append(
        "message",
        "ขณะนี้ค่า pH สูงกว่า 8 ค่า pH ของท่านคือ " + phValue
      );
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://notify-api.line.me/api/notify",
        headers: {
          Authorization: "Bearer iU2H524KfuGVWmHTXZHYTsg1haf6QUZc9OfHoW8H7qZ",
          ...dataPh.getHeaders(),
        },
        data: dataPh,
      };
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (phValue < 3) {
      dataPh.append(
        "message",
        "ขณะนี้ค่า pH ต่ำกว่า 3 ค่า pH ของท่านคือ " + phValue
      );
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://notify-api.line.me/api/notify",
        headers: {
          Authorization: "Bearer iU2H524KfuGVWmHTXZHYTsg1haf6QUZc9OfHoW8H7qZ",
          ...dataPh.getHeaders(),
        },
        data: dataPh,
      };
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
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

app.get("/test", (req, res) => {
  res.status(200).send("Test successful!"); // ส่งข้อความ 'Test successful!' กลับไป
});

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
