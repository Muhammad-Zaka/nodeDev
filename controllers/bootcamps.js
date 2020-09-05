const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res , next) =>{
    //res.status (200).json ({success: true, msg: 'Show all bootcamps' , hello: req.hello});
    res.status (200).json ({success: true, msg: 'Show all bootcamps' });


}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res , next) =>{
    res.status (200).json ({success: true, msg: `Get Bootcamp ${req.params.id} `});

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
exports.updateBootcamp = (req, res , next) =>{
    res.status (200).json ({success: true, msg: `Update Bootcamp ${req.params.id}`});

}


// @desc    Get delete bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res , next) =>{
    res.status (200).json ({success: true, msg: 'Delete bootcamp'});

}
