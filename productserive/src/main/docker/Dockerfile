FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD productserive-0.0.1-SNAPSHOT.jar heerproductservice.jar
RUN sh -c 'touch /heerproductservice.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /heerproductservice.jar" ]
