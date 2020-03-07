let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response); //字符串变数组
        array.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // console.log(request.response);
        const object = JSON.parse(request.response); //把符合json的字符串变成对象或者其他东西
        myName.textContent = object.name;
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // console.log(request.responseXML);
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "3.html");
  request.onload = () => {
    console.log(request.response);
    //创建一个div
    const div = document.createElement("div");
    //填入HTML内容
    div.innerHTML = request.response;
    //插到body
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "2.js");
  request.onload = () => {
    console.log(request.response);
    //创建script标签
    const script = document.createElement("script");
    //写入script内容
    script.innerHTML = request.response;
    //插入body
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
  };
  if (request.readyState === 4) {
    console.log("下载完成");
    //但是不知道成功2xx还是失败4xx 5xx
    if (request.status >= 200 && request.status < 300) {
      //创建style标签
      const style = document.createElement("style");
      //执行style内容
      style.innerHTML = request.response;
      //插到head里面
      document.head.appendChild(style);
    } else {
      alert("加载css失败");
    }
  }
  // request.onload = () => {
  //   console.log("request.response");
  //   console.log(request.response);
  //
  // };
  // request.onerror = () => {
  //   console.log("失败了");
  // };
  //结束
  request.send();
};
