import { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DevToArticle } from '@/app/components/PostsList';
import logo from '@/app/images/logo/vic_logo_4.png';
import { surfaceElevated } from '@/app/constants';

const PostItem: FC<{ post: DevToArticle }> = ({ post }) => {
  const date = new Date(post.published_at);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid rgba(15, 52, 96, 0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(255, 183, 3, 0.3)',
          '& .post-image': {
            transform: 'scale(1.1)',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative', pt: '56.25%', overflow: 'hidden' }}>
        {post.cover_image || post.social_image ? (
          <Image
            src={post.cover_image || post.social_image || ''}
            alt={post.title}
            fill
            className="post-image"
            unoptimized
            style={{
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
          />
        ) : (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: surfaceElevated,
            }}
          >
            <Image src={logo} alt="Default cover" width={60} height={60} style={{ opacity: 0.3 }} />
          </Box>
        )}
      </Box>

      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" spacing={1} mb={2}>
          {post.tag_list.slice(0, 2).map((tag) => (
            <Typography
              key={tag}
              variant="caption"
              sx={{
                color: 'primary.main',
                textTransform: 'uppercase',
              }}
            >
              #{tag}
            </Typography>
          ))}
        </Stack>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.4,
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          {post.description}
        </Typography>

        <Box
          sx={{
            mt: 'auto',
            pt: 2,
            borderTop: '1px solid rgba(15, 52, 96, 0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
            {month} {day}, {date.getFullYear()}
          </Typography>
          <Link
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              '&:hover': { color: 'text.primary' },
            }}
          >
            READ MORE <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PostItem;
