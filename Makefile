git:
	rm -rf public
	hugo -D
	git add .
	git commit -m "$m"
	git push -u origin main 