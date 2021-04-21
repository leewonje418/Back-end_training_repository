import logger from '../../lib/logger';
import { Post } from '../../models';

exports.createPost = async (req, res) => {
    try {
        const { id } = req.user;
        const { title, content } = req.body;
        await Post.create({
            user_id: id,
            title, 
            content
        })
        return res.status(200).json({
            message: '게시글 재작 성공',
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '게시글 재작 오류입니다.',
        })
    }
};
exports.readPostsByOrder = async (req, res) => {
    try {
        const Posts = await Post.findAll({
            order: [
                ['idx', 'DESC']
            ]
        });
        return res.status(200).json({
            message: '글 최신순 전채조회 성공',
            data : {
                Posts
            }
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '글 최신순 전채조회 오류입니다.',
        })
    }
}
exports.readPostsByPopular = async (req, res) => {
    try {
        const Posts = await Post.findAll({
            order: [
                ['view', 'ASC']
            ]
        });
        return res.status(200).json({
            message: '글 인기순 전채조회 성공',
            data : {
                Posts
            }
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '글 인기순 전채조회 오류입니다.',
        })
    }
}
exports.readPost = async (req, res) => {
    const { idx } = req.params;
    try {
        const Post = await Post.findOne({
            where: {
                idx
            }
        });
        const view = Post.view + 1;
        await Post.update({
            view: view
        }, {
            where: { user_id: id }
        })
        return res.status(200).json({
            message: '글 조회 성공',
            data : {
                Post
            }
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '글 조회 오류입니다.',
        })
    }
}
exports.updatePost = async (req, res) => {
    const { idx } = req.params;
    const { title, content } = req.body;
    try {
        await Post.update({
            title: title,
            content: content
        }, {
            where: {
                idx: idx,
            }
        })
        return res.status(200).json({
            message: '게시글 수정 성공',
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '게시글 수정 오류입니다.',
        })
    }
}
exports.deletePost = async (req, res) => {
    const { idx } = req.params;
    try {
        await User.destroy({
            where: { idx }
        })
        return res.status(200).json({
            message: '게시글 삭제 성공'
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '게시글 삭제 오류입니다.'
        })
    }
}