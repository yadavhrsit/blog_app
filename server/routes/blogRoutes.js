const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const blogController = require('../controllers/blogController');

// router.use(authMiddleware);

router.post('/',authMiddleware, blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.get('/user',authMiddleware, blogController.getAllBlogsOfUser);
router.get('/:id', blogController.getBlogById);
router.put("/:id", authMiddleware, blogController.updateBlog);
router.delete("/:id", authMiddleware, blogController.deleteBlog);

module.exports = router;