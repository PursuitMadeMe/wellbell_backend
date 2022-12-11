\c wellbell_dev;


INSERT INTO bells ("type", "message", "funfact") VALUES
('Nutrition', 'Time for a Snack!', 'Coz you are not you when you are hungry.'),
('Nutrition', 'Drink Water!', '64oz of Water are Optimal.'),
('Nutrition', 'Treat Yourself to Brain Food!', 'Fish Are Rich in Omega-3s.'),
('Nutrition', 'Take Your Vitamins!', 'The Eight B Vitamins (thiamin, riboflavin, niacin, pantothenic acid, B6, biotin, folate and B12) provide the most energy.'),
('Nutrition', 'Take Your Time and Enjoy Your Meal!', 'It Takes 7 Minutes Until It Hits Your Stomach.'),
('Nutrition', 'Reach For A Healthy Treat!', 'Yogurt With Granola Packs Protein and Carbohydrates for Refueling.'),
('Physical', 'Take a short walk outside!', 'Fresh air clears the mind
.'),
('Physical', 'Take-4 Big Belly Breath', 'Breathe In For 4 Seconds, Hold for 7, Exhale for 8.'),
('Physical', 'Dangle Your Neck and Rotate Your Head 360 Degrees Slowly', 'This Will Remove Tension Headaches.'),
('Physical', 'Walk Away From Your Screen!', 'Blue Light Can Cause Eye Strain, Headaches, and Difficulty Focusing.'),
('Physical', 'Dance to Your Favorite Song!', 'Dancing Can Get The Blood Flowing.'),
('Physical', 'Stand Up and Stretch Your Body!', 'Stretching Will Make You Feel Refreshed and Ready to Work.'),
('Self-Care', 'Treat yourself to a relaxing bath!', 'Bathing can benefit your muscles, joints and bones.'),
('Self-Care', 'STOP WHAT YOU ARE DOING! Listen to Your Favorite Tune!', 'Hearing Your Favorite Song Will Increase Dopamine and Serotonin - AKA the Feel-Good Chemicals - Levels in your Brain.'),
('Self-Care', 'Meditate for 5-10 Minutes!', 'Meditation Calms the Physical and Psychological Soul'),
('Self-Care', 'Look In The Mirror and Tell Yourself 5 Nice Things', 'Positive Affirmations Will Make You Feel Better.'),
('Self-Care', 'Call or Text Someone You Love', 'Knowing Someone is Listening Makes You Feel Appreciated.'),
('Self-Care', 'DO NOT Check Any Social Media Platforms For The Next Hour!', 'Social Media Feeds Can Decrease Energy, Increase Distractions, and Negatively Impacts Sleep');


INSERT INTO rewards ("type", "content", "code") VALUES
('Physical', '10% off Planet fitness', 'SHOPPF15'),
('Physical', '20% off Zumba class', 'b1summer60'),
('Physical', '15% off Yogaaccessories.com', 'TOGETHER15'),
('Physical', '10% off Pilates', 'Eb3sA4QXw5DDAnbo'),
('Physical', '$100 off Peleton Bike', 'W86KYK'),
('Nutrition', '10% off of GNC', 'ZZMSaTBAvGf9G7fC'),
('Nutrition', '$10 off over $75.00 purchase - Whole Foods', 'yaywholefoods'),
('Nutrition', '10% off Fresh Direct delivery', 'FRESH18'),
('Nutrition', '$2.50 off Cliff Bar', 'YWBCQTHW6KFGKDJ2'),
('Nutrition', '$2.00 off Smart Water 1-Liter bottle', 'ucomar'),
('Self-Care', '5% off SpaFinder Participants', 'SPAFINDER5'),
('Self-Care', '10% off selfcareisforeveryone.com', 'selfcare10'),
('Self-Care', '$10 off at Bed, Bath and Body Works', 'bbb10off'),
('Self-Care', '$15 off at BedBathandBeyond', '15bedbath'),
('Self-Care', '3% Cash Back at Sephora', 'sephora3cb');


INSERT INTO users ("user_id", "email", "username", "firstname", "lastname", "physicalpoints", "nutritionalpoints", "selfcarepoints", "physicalpreferences", "nutritionalpreferences", "mentalpreferences", "photourl") VALUES 
('YNWTla5dkzVnleNytVIH93DYFNf1', 'spencer.san@gmail.com', 'sbsimonsays', 'Spencer', 'Simon', '35', '80', '95', 'false', 'true', 'true', 'https://i.imgur.com/Ivr9Rmo.jpg'),
('uGemip0jhtN1JK5uIoV0S2bNKnt2', 'kenyetttagriffin@pursuit.org', 'kgriffin', 'Kim', 'Griffin', '50', '20', '40', 'true', 'false', 'true', 'https://i.imgur.com/pAOlbc2.png'),
('f4nDsRySYhYBCIJZ8tdjUEVsKbp1', 'pwnsauc3@yahoo.com', 'pwnsauc3', 'Sauce', 'McSauceson', '15', '25', '65', 'true', 'false', 'true', 'https://i.imgur.com/yTDolry.jpg'),
('zfqiEWSrzLQCvnhIgEC08Dahl5t1', 'brahmajede@gmail.com', 'JedeB', 'Jede', 'Brahma', '45', '85', '30', 'false', 'false', 'false', 'https://i.imgur.com/X0EP291.jpg'),
('bchPRWrHRnQnGZsDcoHzDUppITw2', 'wellbell123@wellbell.com', 'mariat', 'Maria', 'Torres', '20', '40', '20', 'false', 'true', 'true', 'https://photos.psychologytoday.com/beb5db63-5916-4b34-9318-e2fae8c97746/2/320x400.jpeg'),
('Fi5sU6ffPXMWI0bWmq40OguYXXn1', 'zanezane@gmail.com', 'ZaneZane', 'Zane', 'Ahmed', '35', '75', '100', 'false', 'true', 'true', 'https://tinyurl.com/2x64jatk');


INSERT INTO users_bells ("user_id", "bell_id", "completion") VALUES
('YNWTla5dkzVnleNytVIH93DYFNf1', '1', 'false'),
('YNWTla5dkzVnleNytVIH93DYFNf1', '7', 'false'),
('YNWTla5dkzVnleNytVIH93DYFNf1', '14', 'true'),
('YNWTla5dkzVnleNytVIH93DYFNf1', '8', 'true'),
('YNWTla5dkzVnleNytVIH93DYFNf1', '15', 'false'),
('YNWTla5dkzVnleNytVIH93DYFNf1', '3', 'false');


INSERT INTO users_rewards ("user_id", "reward_id") VALUES
('YNWTla5dkzVnleNytVIH93DYFNf1', '14'),
('uGemip0jhtN1JK5uIoV0S2bNKnt2', '7');


SELECT * FROM users_bells 
JOIN bells ON users_bells.bell_id = bells.id
JOIN users 
ON users.user_id = users_bells.user_id;

SELECT * FROM users_rewards 
JOIN rewards ON users_rewards.reward_id = rewards.id
JOIN users 
ON users.user_id = users_rewards.user_id;