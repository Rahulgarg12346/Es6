var a=20
      // console.log(a)

          for(var i=0; i<10;i++)
          {
            setTimeout(() => {
                console.log(i)
            }, 1000);
          } //  ans is 10


          for(let i=0; i<10;i++)
          {
            setTimeout(() => {
                console.log(i)
            }, 1000);
          } //  ans is 1 ,2 ..... 10
          