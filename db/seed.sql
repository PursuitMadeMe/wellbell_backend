\c wellbell_dev;


INSERT INTO bells ("name", "type", "notification", "funfact") VALUES
('bell1', 'Nutrition', 'Drink Water!', '64oz of Water is Suggested'),
('bell2', 'Nutrition', 'Treat yourself to brain food!', 'Fish Are Rich in Omega-3s'),
('bell3', 'Nutrition', 'Take your vitamins!', 'B, C, D'),
('bell4', 'Nutrition', 'Take your time and enjoy your meal!', '7 Minutes Until It Hits Your Stomach'),
('bell5', 'Nutrition', 'Reach for a healthy treat!', 'Yogurt Blueberry Granola Bar'),
('bell6', 'Physical', 'Take-4 Big Belly Breath', '4 Seconds In, 8 Seconds Out'),
('bell7', 'Physical', 'Dangle Your Neck and Rotate Your Head 360 Degrees Slowly', 'Removes Tension Headaches'),
('bell8', 'Physical', 'Walk away from your screens!', 'Blue Light Can Cause Headaches'),
('bell9', 'Physical', 'Dance to your favorite song!', 'Dancing Can Get The Blood Flowing!'),
('bell10', 'Physical', 'Lets stand up and stretch our body!', 'Stretching Will Make You Feel New!'),
('bell11', 'Self-Care', 'Sing along to your favorite song!', 'Music Makes The World Go Round!'),
('bell12', 'Self-Care', 'Meditate for 5-10 minutes!', 'Meditation Calms the Physical and Psychological Soul'),
('bell13', 'Self-Care', 'Look In The Mirror and Tell Yourself 5 Nice Things', 'Positive Affirmations Will Make You Feel Better'),
('bell14', 'Self-Care', 'Call or text someone you love', 'Knowing Someone is Listening Will Make You Feel Better'),
('bell15', 'Self-Care', 'Dont check any social media platforms for the next hour!', 'Social Media Feeds Will Slowly Decrease Your Energy'),
('bell16', 'Self-Care', 'STOP WHAT YOU ARE DOING! Listen to Your Favorite Song!', 'Hearing Your Favorite Song Will Increase Dopamine - AKA the Feel-Good Chemical - Levels in your Brain');


INSERT INTO rewards ("type", "content", "code") VALUES
('Physical', '10% off Planet fitness', 'SHOPPF15'),
('Physical', '20% off Zumba class', 'b1summer60'),
('Physical', '15% off Yogaaccessories.com', 'TOGETHER15'),
('Physical', '10% off Pilates', 'Eb3sA4QXw5DDAnbo'),
('Physical', '$100 off Peleton Bike', 'W86KYK'),
('Nutrition ', '10% off of GNC', 'ZZMSaTBAvGf9G7fC'),
('Nutrition ', '$10 off over $75.00 purchase - Whole Foods', 'yaywholefoods'),
('Nutrition ', '10% off Fresh Direct delivery', 'FRESH18'),
('Nutrition ', '$2.50 off Cliff Bar', 'YWBCQTHW6KFGKDJ2'),
('Nutrition ', '$2.00 off Smart Water 1-Liter bottle', 'ucomar'),
('Self-Care', '5% off SpaFinder Participants', 'SPAFINDER5'),
('Self-Care ', '10% off selfcareisforeveryone.com', 'selfcare10'),
('Self-Care', '$10 off at Bed, Bath and Body Works', 'bbb10off'),
('Self-Care ', '$15 off at BedBathandBeyond', '15bedbath'),
('Self-Care', '3% Cash Back at Sephora', 'Sephora3back');


INSERT INTO users ("uuid", "email", "username", "displayName", "ppoints", "npoints", "scpoints") VALUES
('YNWTla5dkzVnleNytVIH93DYFNf1', 'spencer.san@gmail.com', 'sbsimonsays', 'Spencer Simon', '3', '11', '20');
-- ('person2@gmail.com','John', 20, 9, 11),
-- ('person3@gmail.com','Kim', 3, 12, 20),
-- ('person4@gmail.com','Spencer', 6, 13, 20),
-- ('person5@gmail.com','Zane', 14, 18, 17);


INSERT INTO sessions ("uuid", "sessionnumber", "reminder1", "reminder2", "reminder3", "reminder4", "reminder5") VALUES
('YNWTla5dkzVnleNytVIH93DYFNf1', '1', 'bell1', 'bell13', 'bell8', 'bell16', 'bell7');


INSERT INTO users_bells ("user_id", "session_id") VALUES
('1', '1');
-- (1,1),
-- (2,1),
-- (2,2),
-- (3,3),
-- (3,4),
-- (4,5),
-- (5,6),
-- (5,7);


SELECT * FROM users_sessions 
JOIN sessions ON sessions.id = users_sessions.session_id 
JOIN users 
ON users.id = users_sessions.user_id;