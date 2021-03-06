package io.flashboard.dao;

import java.util.List;

import io.flashboard.beans.studyguide.CommentSG;
import io.flashboard.beans.studyguide.StudyGuide;

public interface StudyGuideDao {
	public boolean addStudyGuide(String title, String[] body, String imgUrl, String author);
	public StudyGuide getStudyGuide(int guideId);
	public List<StudyGuide> getAllStudyGuides();
	public List<CommentSG> getStudyGuideComments(int guideId);
	public boolean addGuideComment(CommentSG comment, int guideId);
}
