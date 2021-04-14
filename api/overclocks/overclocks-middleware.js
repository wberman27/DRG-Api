const Overclocks = require('./overclocks-model')

const checkOverclockId = async (req, res, next) => {
  try{
    const overclock = await Overclocks.getById(req.params.id)
    if(overclock){
      req.overclock = overclock;
      next()
    }else{
      res.status(404).json({ message: `overclock with id ${req.params.id} is not found` })
    }
  }catch(err){
    next(err)
  }
}

const checkOverclockPayload = (req, res, next) => {
  if(!req.body.vin){
    res.status(400).json({ message: `vin is missing` })
  }else{
    if(!req.body.make){
      res.status(400).json({ message: `make is missing` })
    }else{
      if(!req.body.model){
        res.status(400).json({ message: `model is missing` })
      }else{
        if(!req.body.mileage){
          res.status(400).json({ message: `mileage is missing` })
        }else{
          next();
        }
      }
    }
  }
}


// const checkVinNumberUnique = async (req, res, next) => {
//   try{
//     const overclock = await Overclocks.getAll()
//     const vinNums = []
//     overclock.map(c => {
//       vinNums.push(c.vin)
//       return vinNums;
//     })
//     if(vinNums.includes(req.body.vin)){
//       res.status(400).json({ message: `vin ${req.body.vin} already exists` })
//     }else{
//       next()
//     }
//   }catch(err){
//     next(err)
//   }
// }

module.exports = {
  checkOverclockId,
  checkOverclockPayload
}