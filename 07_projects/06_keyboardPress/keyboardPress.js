let storeTable=document.getElementById('store')

window.addEventListener('keydown',(e)=>{
    storeTable.innerHTML=`
    <div class="table">
    <table class ="tableitem">
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${(e.key===' '?"space":e.key)}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})
