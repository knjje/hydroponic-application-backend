const express = require("express");
const { admin, ref, rdb } = require("./firebase");
const cors = require("cors");
const app = express();
const axios = require("axios");
const FormData = require("form-data");

app.use(express.json(), cors());

//updateCron
app.post("/updateFT", async (req, res) => {
  try {
    const { ft } = req.body;
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

    return res.status(200).json({ message: "อัปเดตสำเร็จ ft" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});
app.post("/updateMB", async (req, res) => {
  try {
    const { mb } = req.body;
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
      url: "https://api.cron-job.org/jobs/5018210",
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ MB" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});
app.post("/updatePhU", async (req, res) => {
  try {
    const { phU } = req.body;
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
      url: "https://api.cron-job.org/jobs/5020673",
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ phU" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});
app.post("/updatePhD", async (req, res) => {
  try {
    const { phD } = req.body;
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ PhD" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.post("/updateCronSWT", async (req, res) => {
  try {
    const { swt } = req.body;
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

    return res.status(200).json({ message: "อัปเดตสำเร็จ swt" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});

app.post("/updateCronSFT", async (req, res) => {
  try {
    const { sft } = req.body;
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
    return res.status(200).json({ message: "อัปเดตสำเร็จ" });
  } catch (error) {
    return res.status(500).json({ error: "ไม่สามารถอัปเดตได้" });
  }
});


//set time
app.get("/resetSFT", async (req, res) => {
  try {
    const axios = require("axios");
        let configSwtCancel = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "https://api.cron-job.org/jobs/5020677",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
      },
      data: JSON.stringify({
        job: {
          enabled: false
        }
      }),
    };
    axios.request(configSwtCancel)
      .then((response) => {
        console.log("swt job cancelled:", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    return res.status(200).json({ message: "Cron jobs cancelled successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Unable to cancel cron jobs" });
  }
});

app.get("/resetSWT", async (req, res) => {
  try {
    const axios = require("axios");
        let configSwtCancel = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "https://api.cron-job.org/jobs/5020676",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
      },
      data: JSON.stringify({
        job: {
          enabled: false
        }
      }),
    };
    axios.request(configSwtCancel)
      .then((response) => {
        console.log("swt job cancelled:", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    return res.status(200).json({ message: "Cron jobs cancelled successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Unable to cancel cron jobs" });
  }
});

app.get("/resetFT", async (req, res) => {
  try {
    const axios = require("axios");
        let configSwtCancel = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "https://api.cron-job.org/jobs/5018142",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
      },
      data: JSON.stringify({
        job: {
          enabled: false
        }
      }),
    };
    axios.request(configSwtCancel)
      .then((response) => {
        console.log("swt job cancelled:", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    return res.status(200).json({ message: "Cron jobs cancelled successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Unable to cancel cron jobs" });
  }
});

app.get("/resetMB", async (req, res) => {h
  try {
    const axios = require("axios");
        let configSwtCancel = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "https://api.cron-job.org/jobs/5018210",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
      },
      data: JSON.stringify({
        job: {
          enabled: false
        }
      }),
    };
    axios.request(configSwtCancel)
      .then((response) => {
        console.log("swt job cancelled:", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    return res.status(200).json({ message: "Cron jobs cancelled successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Unable to cancel cron jobs" });
  }
});

app.get("/resetPHU", async (req, res) => {
  try {
    const axios = require("axios");
        let configSwtCancel = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "https://api.cron-job.org/jobs/5020673",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
      },
      data: JSON.stringify({
        job: {
          enabled: false
        }
      }),
    };
    axios.request(configSwtCancel)
      .then((response) => {
        console.log("swt job cancelled:", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    return res.status(200).json({ message: "Cron jobs cancelled successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Unable to cancel cron jobs" });
  }
});

app.get("/resetPHD", async (req, res) => {
  try {
    const axios = require("axios");
        let configSwtCancel = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "https://api.cron-job.org/jobs/5020675",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ftYbSmpLTBEJkXdU9Dmfcs+TPoyT4B7XD/lcdwHibR4=",
      },
      data: JSON.stringify({
        job: {
          enabled: false
        }
      }),
    };
    axios.request(configSwtCancel)
      .then((response) => {
        console.log("swt job cancelled:", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    return res.status(200).json({ message: "Cron jobs cancelled successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Unable to cancel cron jobs" });
  }
});


//change status
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


//noti
app.get("/noti", async (req, res) => {
  try{
  letdatatem = new FormData();
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
  return res.status(200).json({ message: "success" });
} catch (error) {
  return res.status(500).json({ error: "error" });
}
});

app.get("/test", (req, res) => {
  res.status(200).send("Test successful!"); // ส่งข้อความ 'Test successful!' กลับไป
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
