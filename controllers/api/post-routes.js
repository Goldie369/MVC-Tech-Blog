const router = require('express').Router();
const { Post } = require('../../models');


//-- The first route defines a handler for creating a new post using a HTTP POST request sent to the server at the path '/'--//
//-- Adding a oute handler function, it creates a new post using the Post.create() method--//
//-- title--//
//-- content--//
//--user_id--//
//--The second route defines a handler for updating an existing post using a HTTP PUT request--//
//-- The third route defines a handler for deleting an existing post using a HTTP DELETE request--//

router.post('/', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.put('/:id', async (req, res) => {
  try {
    const dbPostData = await Post.update({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(dbPostData);
  } catch (err) {
      res.status(500).json(err);
    };
});



router.delete('/:id', async (req, res) => {
  try {
  const dbPostData = await Post.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
