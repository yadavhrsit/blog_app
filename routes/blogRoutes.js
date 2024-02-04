const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const blogController = require('../controllers/blogController');

router.use(authMiddleware);

router.post('/', blogController.createBlog);
router.get('/', blogController.getAllBlogs);
// router.get('/', blogController.getAllBlogsOfUser);
router.get('/:id', blogController.getBlogById);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;