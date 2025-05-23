const shipsService = require('../services/ships.service');

 
exports.searchShip = async (req, res, next) => {
  try {
    const { name } = req.query;
    
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a ship name',
      });
    }
    
    const shipData = await shipsService.getShipByName(name);
    
    res.status(200).json({
      success: true,
      data: shipData,
    });
  } catch (error) {
    next(error);
  }
};