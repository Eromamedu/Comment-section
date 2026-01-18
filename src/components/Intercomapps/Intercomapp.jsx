import React, { useEffect, useState } from 'react';
const STORAGE_KEY = 'fm-comments-v1';
// SAMPLE
const sample = {
  currentUser: { username: 'juliusomo', image: null },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.",
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
      score: 12,
      user: { username: 'amyrobson' },
      replies: [],
    },
    // id.2git add .
// git commit -m "resolve merge conflict"
// iddd
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for?",
      createdAt: Date.now() - 1000 * 60 * 60 * 24 * 14,
      score: 5,
      user: { username: 'maxblagun' },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React.",
          createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7,
          score: 4,
          replyingTo: 'maxblagun',
          user: { username: 'ramsesmiron'} ,
        }, 
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library.",
          createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
          score: 2,
          replyingTo: 'ramsesmiron',
          user: { username: 'juliusomo' },
        },
      ],
    },
  ],
};
// final stage
function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  const d = Math.floor(h / 24);
  return `${d}d`;
}
// export
export default function CommentSection() {
  const [data, setData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || sample;
    } catch (e) {
      return sample;
    }
  });
  const [text, setText] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  // }, [data]);
  const nextId = () => {
    const max = [
      ...data.comments.map((c) => c.id),
      ...data.comments.flatMap((c) => c.replies.map((r) => r.id)),
    ].reduce((a, b) => Math.max(a, b), 0);
    return max + 1;
  };
// addComment
  function addComment() {
    const val = text.trim();
    if (!val) return;
    const newComment = {
      id: nextId(),
      content: val,
      createdAt: Date.now(),
      score: 0,
      user: data.currentUser,
      replies: [],
    };
    setData((d) => ({ ...d, comments: [...d.comments, newComment] }));
    setText('');
  }
  // create
// release 

  function updateComment(id, newContent, isReply = false, parentId = null) {
    setData((d) => {
      const comments = d.comments.map((c) => {
        if (c.id === id && !isReply) return { ...c, content: newContent };
        if (c.id === parentId && isReply) {
          return {
            ...c,
            replies: c.replies.map((r) => (r.id === id ? { ...r, content: newContent } : r)),
          };
        }
        return c;
      });
      return { ...d, comments };
    });
  }

  function deleteComment(id, isReply = false, parentId = null) {
    setData((d) => {
      if (!isReply) return { ...d, comments: d.comments.filter((c) => c.id !== id) };
      return {
        ...d,
        comments: d.comments.map((c) => (c.id === parentId ? { ...c, replies: c.replies.filter((r) => r.id !== id) } : c)),
      };
    });
  }

  function addReply(parentId, replyingTo, replyText) {
    const r = {
      id: nextId(),
      content: replyText,
      createdAt: Date.now(),
      score: 0,
      replyingTo,
      user: data.currentUser,
    };
    setData((d) => ({ ...d, comments: d.comments.map((c) => (c.id === parentId ? { ...c, replies: [...c.replies, r] } : c)) }));
  }

  function vote(id, delta, isReply = false, parentId = null) {
    setData((d) => ({
      ...d,
      comments: d.comments.map((c) => {
        if (!isReply && c.id === id) return { ...c, score: c.score + delta };
        if (isReply && c.id === parentId) {
          return { ...c, replies: c.replies.map((r) => (r.id === id ? { ...r, score: r.score + delta } : r)) };
        }
        return c;
      }),
    }));
  }
// return
  return (
    <div className="comments-wrap">
      <div className="card">
        {data.comments.map((c) => (
          <div className="comment-block" key={c.id}>
            <div className="vote">
              <button onClick={() => vote(c.id, 1)} aria-label="upvote">+</button>
              <div className="score">{c.score}</div>
              <button onClick={() => vote(c.id, -1)} aria-label="downvote">-</button>
            </div>

            <div className="content">
              <div className="meta">
                <div className="user">{c.user.username}</div>
                <div className="time">{timeAgo(c.createdAt)}</div>
                <button className="reply" onClick={() => { const t = prompt('Reply:'); if (t) addReply(c.id, c.user.username, t); }}>Reply</button>
              </div>
              {/* CARD */}
              <div className="text">{c.content}</div>

              {c.replies.length > 0 && (
                <div className="replies">
                  {c.replies.map((r) => (
                    <div className="reply-block" key={r.id}>
                      <div className="vote small">
                        <button onClick={() => vote(r.id, 1, true, c.id)}>+</button>
                        <div className="score">{r.score}</div>
                        <button onClick={() => vote(r.id, -1, true, c.id)}>-</button>
                      </div>
                      <div className="content small">
                        <div className="meta">
                          <div className="user">{r.user.username}</div>
                          <div className="time">{timeAgo(r.createdAt)}</div>
                          <button className="reply" onClick={() => { const t = prompt('Reply to @' + r.user.username + ':'); if (t) addReply(c.id, r.user.username, t); }}>Reply</button>
                          <button className="edit" onClick={() => { const t = prompt('Edit:', r.content); if (t !== null) updateComment(r.id, t, true, c.id); }}>Edit</button>
                          <button className="delete" onClick={() => { if (window.confirm('Delete reply?')) deleteComment(r.id, true, c.id); }}>Delete</button>
                        </div>
                        <div className="text"><span className="at">@{r.replyingTo} </span>{r.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="new-comment">
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a comment..." />
          <div>
            <button className="btn" onClick={addComment}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}


