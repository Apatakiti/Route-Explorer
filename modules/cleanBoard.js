export const cleanPath = () => {

  const getPath =  document.querySelectorAll(".shortestpath")
  getPath.forEach(clas => {
    clas.classList.remove('shortestpath')
  });

  const getVisiting =  document.querySelectorAll(".currentCell")
  getVisiting.forEach(clas => {
    clas.classList.remove('currentCell')
  });
}

export const cleanBoard = () => {

    const getBlocks =  document.querySelectorAll(".block")
    getBlocks.forEach(clas => {
      clas.classList.remove('block')
    });
  
    const getPath =  document.querySelectorAll(".shortestpath")
    getPath.forEach(clas => {
      clas.classList.remove('shortestpath')
    });

    const getVisiting =  document.querySelectorAll(".currentCell")
    getVisiting.forEach(clas => {
      clas.classList.remove('currentCell')
    });
}
