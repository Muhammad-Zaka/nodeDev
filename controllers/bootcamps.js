const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res , next) =>{
    //res.status (200).json ({success: true, msg: 'Show all bootcamps' , hello: req.hello});
    
    try{

    const bootcamps =await Bootcamp.find();
    res.status(200).json({success: true, count : bootcamps.length, data: bootcamps});
    }

    catch(err){
        res.status(400).json({
            success: false
        
        });
        

    }
   // res.status (200).json ({success: true, msg: 'Show all bootcamps' });
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp =async (req, res , next) =>{

    try{

        const bootcamp =await Bootcamp.findById(req.params.id);
        
        if (!bootcamp){
            return next (new ErrorResponse(`Bootcamp with ID of ${req.params.id}`,404));
            
        }    

        res.status(200).json({success: true, data: bootcamp});
    
    
    }
    
        catch(err){
          //  res.status(400).json({
        //        success: false
       //     });
       next(new ErrorResponse(`Bootcamp with ID of ${req.params.id}`,404));
        }
    //res.status (200).json ({success: true, msg: `Get Bootcamp ${req.params.id} `});

}

// @desc    Get Create new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = async (req, res , next) =>{
    try {
        const bootcamp= await Bootcamp.create(req.body);
        res.status(201).json({
         success: true,
         data: bootcamp
        });

    } catch (error) {
        res.status(400).json({
            success: false
        });
        
    }
    //console.log(req.body);
    //res.status (200).json ({success: true, msg: 'Create a new bootcamp'});

};

// @desc    Get Update bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res , next) =>{
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
            });
            if (!bootcamp){
                return res.status(400).json({
                    success: false
                });
       
            } 
            res.status(200).json({success: true , data: bootcamp});

    } catch (error) {
        res.status(400).json({
            success: false
        });
    }
 
    
    
    //res.status (200).json ({success: true, msg: `Update Bootcamp ${req.params.id}`});

}


// @desc    Get delete bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async(req, res , next) =>{
 
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
            
        if (!bootcamp){
                return res.status(400).json({
                    success: false
                });
                
            } 

            res.status(200).json({success: true , data: {}});

    } catch (error) {
        res.status(400).json({
            success: false
        });
    }
 
    
    
    //res.status (200).json ({success: true, msg: 'Delete bootcamp'});

}
