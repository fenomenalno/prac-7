let allList = ['kirber228@gmail.com','kirber227@gmail.com','kirber244@gmail.com','kirber2228@gmail.com','kirber2328@gmail.com','kirber2128@gmail.com','kirber2248@gmail.com','kirber2528@gmail.com',];
let blackList = ['kirber228@gmail.com','kirber227@gmail.com','kirber244@gmail.com',];
function getValidEmails() {
    return allList.filter((mail) => !blackList.includes(mail));
  };

console.log( allList, blackList);
console.log( getValidEmails());