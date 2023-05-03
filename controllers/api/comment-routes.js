
const router = require('express').Router();
const { Comment } = require('../../models');

//-- Inside the route handler function, it creates a new comment using the Comment.create() method and passes in an object with three properties--//
//-- content--//
//-- post_id--//
//-- user_id--//

router.post('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      content: req.body.content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(dbCommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
