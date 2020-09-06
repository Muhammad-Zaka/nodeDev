const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = asyncHandler(async (req, res , next) =>{
    //res.status (200).json ({success: true, msg: 'Show all bootcamps' , hello: req.hello});
    
   

    const bootcamps =await Bootcamp.find();
    res.status(200).json({success: true, count : bootcamps.length, data: bootcamps});
    

 
   // res.status (200).json ({success: true, msg: 'Show all bootcamps' });
});

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp =asyncHandler(async (req, res , next) =>{

    

        const bootcamp =await Bootcamp.findById(req.params.id);
        
        if (!bootcamp){
            return next (new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`,404));
            
        }    

        res.status(200).json({success: true, data: bootcamp});
    

    
    

    //res.status (200).json ({success: true, msg: `Get Bootcamp ${req.params.id} `});

});

// @desc    Get Create new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = asyncHandler(async (req, res , next) =>{
    
        const bootcamp= await Bootcamp.create(req.body);
        res.status(201).json({
         success: true,
         data: bootcamp
        });


    //console.log(req.body);
    //res.status (200).json ({success: true, msg: 'Create a new bootcamp'});

});

// @desc    Get Update bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res , next) =>{
    
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
            });
            if (!bootcamp){
                return next (new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`,404));

            }
            res.status(200).json({success: true , data: bootcamp});


    
    
    //res.status (200).json ({success: true, msg: `Update Bootcamp ${req.params.id}`});

});


// @desc    Get delete bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async(req, res , next) =>{
 
  
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
            
        if (!bootcamp){
            return next (new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`,404));

                
            } 

            res.status(200).json({success: true , data: {}});


 
    
    
    //res.status (200).json ({success: true, msg: 'Delete bootcamp'});

});
