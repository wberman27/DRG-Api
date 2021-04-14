const router = require('express').Router();
const Overclocks = require('./overclocks-model');
const mw = require('./overclocks-middleware');

//get all
router.get('/' , async (req, res, next)=>{
    try{
        const data = await Overclocks.getAll()
        res.status(200).json(data);
    }catch(err){
        next(err)
    }
});

//getbyid
router.get('/:id' , mw.checkOverclockId, (req, res)=>{
    res.status(200).json(req.Overclock)
});

//create
router.post('/' , mw.checkOverclockPayload, async (req, res, next)=>{
    try{
        const newOverclock = await Overclocks.create(req.body)
        res.status(201).json(newOverclock)
    }catch(err){
        next(err)
    }
});

router.use((err, req, res, next) =>{
    res.status(500).json({message: err.message})
});

module.exports = router;


