\c wellbell_dev;

INSERT INTO bells (name, type, notification, funfact) VALUES
('reminder1', 'Nutrition', 'Drink Water!', '64oz of Water'),
('reminder2', 'Nutrition', 'Treat yourself to brain food!', 'Fish Are Rich in Omega-3s'),
('reminder3', 'Nutrition', 'Take your vitamins!', 'B, C, D'),
('reminder4', 'Nutrition', 'Take your time and enjoy your meal!', '7 Minutes Until It Hits Your Stomach'),
('reminder5', 'Nutrition', 'Reach for a healthy treat!', 'Yogurt Blueberry Granola Bar'),
('reminder6', 'Physical', 'Take-4 Big Belly Breath', '4 Seconds In, 8 Seconds Out'),
('reminder7', 'Physical', 'Dangle Your Neck and Rotate Your Head 360 Degrees Slowly', 'Removes Tension Headaches'),
('reminder8', 'Physical', 'Walk away from your screens!', 'Blue Light Can Cause Headaches'),
('reminder9', 'Physical', 'Dance to your favorite song!', 'Dancing Can Get The Blood Flowing!'),
('reminder10', 'Physical', 'Lets stand up and stretch our body!', 'Stretching Will Make You Feel New!'),
('reminder11', 'Self-Care', 'Sing along to your favorite song!', 'Music Makes The World Go Round!'),
('reminder12', 'Self-Care', 'Meditate for 5-10 minutes!', 'Meditation Calms the Physical and Psychological Soul'),
('reminder13', 'Self-Care', 'Look In The Mirror and Tell Yourself 5 Nice Things', 'Positive Affirmations Will Make You Feel Better'),
('reminder14', 'Self-Care', 'Call or text someone you love', 'Knowing Someone is Listening Will Make You Feel Better'),
('reminder15', 'Self-Care', 'Dont check any social media platforms for the next hour!', 'Social Media Feeds Will Slowly Decrease Your Energy');



SPENCER SIMON:
NUTRITION [  5  ]
PHYSICAL [  20  ] CLAIM REWARD
SELF-CARE [   4  ]


INSERT INTO rewards (type, content, coupon) VALUES
('Physical','10% off Planet fitness'),
('Physical','20% off Zumba class'),
('Physical','15% off Yoga class'),
('Physical','10% off Pilates'),
('Physical','$20 off Peloton'),
('Nutrition ','10% off of GNC'),
('Nutrition ','$10 off over $75.00 purchase - Whole Foods'),
('Nutrition ','10% off Fresh Direct delivery'),
('Nutrition ','$2.50 off Cliff Bar'),
('Nutrition ','$2.00 off Smart Water 1-Liter bottle'),
('Self-Care','5% off SpaFinder Participants'),
('Self-Care ','10% off selfcareisforeveryone.com'),
('Self-Care','$10 off at Bed, Bath and Body Works'),
('Self-Care ','$15 off at BedBathandBeyond'),
('Self-Care','3% Cash Back at Sephora');

.. USER INFO: uid, firstName, lastName,
INSERT INTO users (email, username, ppoints, npoints, scpoints)
VALUES
('person1@gmail.com','Jede', 2, 20, 8),
('person2@gmail.com','John', 20, 9, 11),
('person3@gmail.com','Kim', 3, 12, 20),
('person4@gmail.com','Spencer', 6, 13, 20),
('person5@gmail.com','Zane', 14, 18, 17);

INSERT INTO users_bells (user_id, bell_id)
VALUES
(1,1),
(1,1),
(2,1),
(2,2),
(3,3),
(3,4),
(4,5),
(5,6),
(5,7);
