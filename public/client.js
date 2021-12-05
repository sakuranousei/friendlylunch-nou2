console.log("hello world");


// index request the Users from our app's sqlite database
//indexページでUsersデータを呼び出し
fetch("/getUsersData", {})
  .then(res => res.json())
  .then(response => {
    response.forEach(row => {
      appendNewUserRadio(row.id, row.user);
    });
  });

//indexページ Menusデータを呼び出し
fetch("/getMenusData", {})
  .then(res => res.json())
  .then(response => {
    response.forEach(row => {
       appendNewMenusAccordion(row.id, row.store, row.menu, row.price);
    });
  });


//indexページ Usersデータ反映 ラジオボタン a helper function that creates a list item for a given user
const appendNewUserRadio = (id, user) => {
  // console.log(id, user);
  const parent = document.getElementById("usersArea");
  const div = document.createElement("div");
    div.className = "form-check mb-4";
  const input = document.createElement("input");
    input.className = "form-check-input";
    input.type = "radio";
    input.name = "flexRadioDefault"
  const label = document.createElement("label");
    label.className = "form-check-label";
    label.innerText = user;
  parent.appendChild(div);
  div.append(input);
  div.append(label);
}


//indexページ Menusデータ反映 アコーディオン
const appendNewMenusAccordion = (id, store, menu, price) => {
  const parent = document.getElementById("menusArea");
  const div_1 = document.createElement("div");
    div_1.className = "accordion-item";
  const h2 = document.createElement("h2");
    h2.className = "accordion-header";
    h2.id = `heading_${id}`;
  const button = document.createElement("button");
    button.className = "accordion-button collapsed";
    button.type = "button";
    button.data-bs-toggle = "collapse";
    button.data-bs-target = "#collapseOne";
    button.aria-expanded = "false";
    button.aria-controls = "collapseOne";
    button.value = "store"
  const div_2 = document.createElement("div");
    div_2.id = 
  
  
};


      // <div class="accordion-item">
      //   <h2 class="accordion-header" id="headingOne">
      //     <button
      //       class="accordion-button collapsed"
      //       type="button"
      //       data-bs-toggle="collapse"
      //       data-bs-target="#collapseOne"
      //       aria-expanded="false"
      //       aria-controls="collapseOne"
      //     >
      //       さくら弁当
      //     </button>
      //   </h2>
      //   <div
      //     id="collapseOne"
      //     class="accordion-collapse collapse"
      //     aria-labelledby="headingOne"
      //   >
      //     <div class="accordion-body">
      //       <div class="form-check">
      //         <input
      //           class="form-check-input"
      //           type="checkbox"
      //           value=""
      //           id="flexCheckDefault"
      //         />
      //         <label class="form-check-label" for="flexCheckDefault">
      //           普通
      //         </label>
      //         <label class="form-check-label" for="flexCheckChecked">
      //           500
      //         </label>
      //       </div>
      //       <div class="form-check">
      //         <input
      //           class="form-check-input"
      //           type="checkbox"
      //           value=""
      //           id="flexCheckChecked"
      //         />
      //         <label class="form-check-label" for="flexCheckChecked">
      //           おかずのみ
      //         </label>
      //         <label class="form-check-label" for="flexCheckChecked">
      //           280
      //         </label>
      //       </div>
      //     </div>
      //   </div>
      // </div>



//日付
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()　+ 1;
const week = today.getDay();
const day = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
//年・月・日・曜日を取得
const week_ja = new Array("日", "月", "火", "水", "木", "金", "土");
//年・月・日・曜日を書き出す
document.getElementById("todayDate").textContent =
  year + "年" + month + "月" + day + "日 " + week_ja[week] + "曜日";
document.getElementById("todayTime").textContent = hour + "時" + minute + "分";
